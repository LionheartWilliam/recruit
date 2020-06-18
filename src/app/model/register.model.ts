import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Register{
    uid:string;
    rtype:string;
    name:string;
    twid:string;
    birth:number;
    gender:string;
    phoneNumber:string;
    address:string;
    degree:string;
    college:string;
    major:string;
    teacherEducation:string;
    countyScore:number;
    validationStatus:boolean;
    timeStamp:number;
    serialNumber:number;
    proxyRank:string;
}