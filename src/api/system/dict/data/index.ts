import type { DictDataForm, DictDataQuery, DictDataVO } from './types';

const BASE_API = import.meta.env.VITE_APP_BASE_API_DEV;

// 根据字典类型查询字典数据信息
export function getDictsApi(dictType: string) {
  return useGet<DictDataVO[]>(`${BASE_API}/system/dict/data/type/${dictType}`);
}

// 查询字典数据列表
export function listDataApi(query: DictDataQuery) {
  return useGet<DictDataVO[]>(`${BASE_API}/system/dict/data/list`, query);
}

// 查询字典数据详细
export function getDataApi(dictCode: string | number) {
  return useGet<DictDataVO>(`${BASE_API}/system/dict/data/${dictCode}`);
}

// 新增字典数据
export function addDataApi(data: DictDataForm) {
  return usePost(`${BASE_API}/system/dict/data`, data);
}

// 修改字典数据
export function updateDataApi(data: DictDataForm) {
  return usePut(`${BASE_API}/system/dict/data`, data);
}

// 删除字典数据
export function delDataApi(dictCode: string | number | Array<string | number>) {
  return useDelete(`${BASE_API}/system/dict/data/${dictCode}`);
}

export type { DictDataForm, DictDataQuery, DictDataVO };
