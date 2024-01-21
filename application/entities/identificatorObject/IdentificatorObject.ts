export type IdentificatorObject = {
  authorization: string;
  accept: string;
  host: string;
  connection: string;
  actorLocation: ActorLocation;
  apikey?: string;
  secret?: string;
};

type ActorLocation = {
  ip: string;
  userAgent: string;
  originDomain?: string;
};
