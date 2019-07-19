import {IDetectedLng} from './detected.lng.interface';
import {Request} from '@nestjs/common';

export interface IRequestWithDetectedLng extends Request, IDetectedLng {
}
