// tslint:disable-next-line:no-any
export function getDataProps(props: any) {
  let dataProps: Record<string, {}> = {};

  for (let key of Object.keys(props).filter((k) => k.startsWith('data-'))) {
    dataProps[key] = props[key];
  }

  return dataProps;
}
