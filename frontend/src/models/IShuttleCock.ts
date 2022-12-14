import { EventShuttInterface } from "./IEvent";
import { EventGroupmemberShuttlecockInterface } from "./IEventGroupMemberShuttlecock";
import { MembersInterface } from "./IUser";

export interface ShuttleCockInterface {
    
    ID: number;
	Code: string;
    Price: number;

    EventShuttID: number;
    EventShutt: EventShuttInterface;

    MemberID: number;
    Member: MembersInterface;

    EventGroupMemberShuttlecock: EventGroupmemberShuttlecockInterface[];


}
