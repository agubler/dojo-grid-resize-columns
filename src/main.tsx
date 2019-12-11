import renderer, { tsx, create } from "@dojo/framework/core/vdom";
import Grid from "@dojo/widgets/grid";
import { ColumnConfig } from "@dojo/widgets/grid/interfaces";
import { createFetcher } from "@dojo/widgets/grid/utils";
import dojo from "@dojo/themes/dojo";
import "@dojo/themes/dojo/index.css";

import { createData } from "./data";

const columnConfig: ColumnConfig[] = [
  {
    id: "id",
    title: "ID",
    resizable: true
  },
  {
    id: "firstName",
    title: "First Name",
    resizable: true
  },
  {
    id: "middleName",
    title: "Middle Name"
  },
  {
    id: "lastName",
    title: "Last Name"
  },
  {
    id: "otherName",
    title: "Other Name",
    resizable: true
  }
];

const fetcher = createFetcher(createData());
const factory = create();

const Example = factory(function Example() {
  return (
    <Grid
      theme={dojo}
      fetcher={fetcher}
      columnConfig={columnConfig}
      height={450}
    />
  );
});

const r = renderer(() => <Example />);
r.mount();
