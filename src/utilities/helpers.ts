import { PAGE_QUERY } from './constant'
import * as bcrypt from 'bcrypt';

export class Helpers {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public static queryOption(query: any, options = {}) {
    let {
      filterObj,
      pageNumber,
      takeRows,
      searchKey,
      searchVal,
      sortKey,
      sortVal,
    }: any = { ...PAGE_QUERY, ...options };

    filterObj = query?.filter || filterObj;

    pageNumber = query?.page?.pageno || pageNumber;
    takeRows = query?.page?.take || takeRows;

    searchKey = query?.search?.key || searchKey;
    searchVal = query?.search?.value || searchVal;

    sortKey = query?.sort?.key || sortKey;
    sortVal = query?.sort?.value || sortVal;

    if (filterObj?.active) {
      filterObj['active'] = Number(filterObj.active);
    }

    return {
      pageNo: +pageNumber,
      take: +takeRows,
      filterObj: filterObj,
      searchKey: searchKey,
      searchVal: searchVal,
      sortKey: sortKey,
      sortVal: sortVal,
    };
  }
}
