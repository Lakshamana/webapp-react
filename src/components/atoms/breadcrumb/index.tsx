import React from "react";
import {
  Breadcrumb as BreadcrumComponent,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Props } from "./types";

const Breadcrumb = ({ options = [] }: Props): any => (
  <BreadcrumComponent>
    {options.map((e) => (
      <BreadcrumbItem isCurrentPage={e.isCurrentPage}>
        <BreadcrumbLink onClick={() => e.onClick}>{e.name}</BreadcrumbLink>
      </BreadcrumbItem>
    ))}
  </BreadcrumComponent>
);

export { Breadcrumb };
