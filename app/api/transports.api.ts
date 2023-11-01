import { AxiosInstance } from 'axios';
import { HTTPService } from '@app/services';
import { Endpoints } from '@app/constants/endpoints';

export class TransportsApi extends HTTPService {
  private readonly endpoints: Endpoints;

  constructor(readonly instance: AxiosInstance, readonly ep: Endpoints) {
    super(instance);
    this.endpoints = ep;
  }

  async getDrivers(): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.drivers,
    });
    return res.data;
  }
  async getOngoingUpcoming(): Promise<{
    ongoing: any[];
    upcoming: any[];
  }> {
    const res = await this.get({
      endpoint: this.endpoints.transports.ongoing,
    });
    return res.data;
  }

  async getOngoingTrips(): Promise<any[]> {
    const res = await this.get({
      endpoint: this.endpoints.transports.trips,
    });
    return res.data;
  }

  async getAllSchedules(): Promise<any> {
    const res = await this.get({
      endpoint: this.endpoints.transports.schedules,
    });
    const regular = res.data.filter((sc: any) => sc.tripKind === 'Regular');
    const special = res.data.filter((sc: any) => sc.tripKind === 'Special');
    return {
      regular,
      special,
    };
  }
}
