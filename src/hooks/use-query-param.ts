

export function useQueryParam<T extends boolean | number | string> (
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void,
  param: string,
  defaultValue?:T
) : [T | null, (value: T | null) => void] {
    const paramValue = searchParams.get(param)
    const convertedValue = getConvertedValue<T>(paramValue, defaultValue)
}

const getConvertedValue () => {

}