import type { StrapiCore as Strapi } from "../core";
import { rest } from "../core";
import type {
  Organization,
  OrgStructure,
  OrgPosition,
  OrgMember,
} from "../types";

/**
 * Organize plugins by it's type
 */
export function organization(api: Strapi) {
  return {
    org: rest<Organization>(api, "/organizations"),
    structure: rest<OrgStructure>(api, "/org-structures"),
    position: rest<OrgPosition>(api, "/org-positions"),
    member: rest<OrgMember>(api, "/org-members"),
  };
}
