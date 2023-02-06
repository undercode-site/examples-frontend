type MappedObject<T, V> = { [K in keyof T]: V };
type ObjectEntry<T> = [key: string, value: T];

export function mapObject<T, V, S>(
  object: T,
  callback: (entry: ObjectEntry<S>, index: number, object: T) => ObjectEntry<V>
): MappedObject<T, V> {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]: ObjectEntry<S>, index) => {
      return callback([key, value], index, object);
    })
  ) as MappedObject<T, V>;
}
