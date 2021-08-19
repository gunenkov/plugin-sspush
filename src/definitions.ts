export interface SsPushPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
