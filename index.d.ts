declare module "react-native-icloudstore" {
  interface ICloudStore {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    mergeItem?(key: string, value: string): Promise<void>;
    clear(): Promise<void>;
    getAllKeys(): Promise<string[]>;
    multiGet?(keys: string[]): Promise<(string | null)[]>;
    multiSet?(keyValuePairs: Record<string, string>): Promise<void>;
    multiRemove?(keys: string[]): Promise<void>;
    multiMerge?(keyValuePairs: Record<string, string>): Promise<void>;
    isICloudAvailable(): Promise<boolean>;
    readonly ICLOUD_STORE_CHANGED?: string;
  }

  const ICloudStore: ICloudStore & NativeModule;

  export default ICloudStore;
}
