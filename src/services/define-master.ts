import api from './api';

export const defineMaster = (): Promise<{ forcePath: 'light' | 'dark'; master: string }> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject): Promise<void> => {
    try {
      const lightURL = 'people/1';
      const darkURL = 'people/4';

      const light: Promise<PeopleResponseProps> = api.get(lightURL);
      const dark: Promise<PeopleResponseProps> = api.get(darkURL);

      const response = await Promise.race([light, dark]);
      const { data, config } = response;

      resolve({
        forcePath: config?.url === lightURL ? 'light' : 'dark',
        master: data?.name,
      });
    } catch (e: any) {
      reject(e?.message);
    }
  });
};
