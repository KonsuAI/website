import SubwayVariant from "~icons/mdi/subway-variant";
import Airplane from "~icons/mdi/airplane";
import Ferry from "~icons/mdi/ferry";
import Bus from "~icons/mdi/bus";
import Train from "~icons/mdi/train";
import Walk from "~icons/mdi/walk";
import type { DateTime } from "luxon";

export enum TransportType {
	Bus = "bus",
	Subway = "subway",
	Train = "train",
	Walk = "walk",
	Plane = "plane",
	Boat = "boat",
}

export function getTransportIcon(type: TransportType) {
	switch (type) {
		case TransportType.Bus:
			return Bus;
		case TransportType.Subway:
			return SubwayVariant;
		case TransportType.Train:
			return Train;
		case TransportType.Walk:
			return Walk;
		case TransportType.Plane:
			return Airplane;
		case TransportType.Boat:
			return Ferry;
	}
}

export interface TransportStop {
	expected?: DateTime;
	planned: DateTime;
	name: string;
	platform?: string;
}
