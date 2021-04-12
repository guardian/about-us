interface Breakpoints {
  readonly tablet: number;
  readonly desktop: number;
  readonly wide: number;
}

type BreakpointQueries = { [_ in keyof Breakpoints]: string };

const namedBreakpoints: Breakpoints = {
  tablet: 740,
  desktop: 980,
  wide: 1300,
};

const toMediaQuery = (
  bound: "min" | "max",
  dimension: "width" | "height",
  value: number
) => `@media (${bound}-${dimension}: ${value}px)`;

export const queries = {
  minWidth: (from: number): string => toMediaQuery("min", "width", from),
  maxWidth: (until: number): string => toMediaQuery("max", "width", until - 1),
  minHeight: (from: number): string => toMediaQuery("min", "height", from),
  maxHeight: (until: number): string =>
    toMediaQuery("max", "height", until - 1),
};

const mapBreakpointValues: (
  bs: Breakpoints,
  f: (x: number) => string
) => BreakpointQueries = (bs, f) => ({
  tablet: f(bs.tablet),
  desktop: f(bs.desktop),
  wide: f(bs.wide),
});

// Example usage
// ${minWidth.tablet} {
//   do something here
// }

export const minWidth = mapBreakpointValues(namedBreakpoints, queries.minWidth);
export const maxWidth = mapBreakpointValues(namedBreakpoints, queries.maxWidth);
