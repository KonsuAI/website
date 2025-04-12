import SubwayVariant from "svelte-material-icons/SubwayVariant.svelte";
import Airplane from "svelte-material-icons/Airplane.svelte";
import Ferry from "svelte-material-icons/Ferry.svelte";
import Bus from "svelte-material-icons/Bus.svelte";
import Train from "svelte-material-icons/Train.svelte";
import Walk from "svelte-material-icons/Walk.svelte";
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
	expected: DateTime;
	planned: DateTime;
	name: string;
	platform?: string;
}
