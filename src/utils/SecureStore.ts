import * as SecureStore from "expo-secure-store";

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<string | null | undefined> {
  let result = (await SecureStore.getItemAsync(key)) as string;
  return result;
}

async function removeValueFor(key: string): Promise<void> {
  await SecureStore.deleteItemAsync(key);
}

export { save, getValueFor, removeValueFor };
