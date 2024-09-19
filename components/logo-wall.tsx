/**
 * Wrapper for Clients component
 */

import { getPartnerLogoContent } from "@/content/queries"
import Clients from "./clients"

export default async function LogoWall() {
  const data = await getPartnerLogoContent()

  return <Clients content={data.assetCollection.items} />
}
