export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  Dimension: { input: any; output: any }
  HexColor: { input: any; output: any }
  JSON: { input: any; output: any }
  Quality: { input: any; output: any }
}

export type ArmourFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArmourFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ArmourFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  specialRules?: InputMaybe<CfSpecialRuleNestedFilter>
  specialRulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type ArmourLinkingCollectionsHenchmanCollectionOrder =
  | 'count_ASC'
  | 'count_DESC'
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type ArmourLinkingCollectionsHeroCollectionOrder =
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type ArmourOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type ArmourSpecialRulesCollectionOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetOrder =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC'

export type BlackPowderWeaponFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlackPowderWeaponFilter>>>
  OR?: InputMaybe<Array<InputMaybe<BlackPowderWeaponFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  range?: InputMaybe<Scalars['Int']['input']>
  range_exists?: InputMaybe<Scalars['Boolean']['input']>
  range_gt?: InputMaybe<Scalars['Int']['input']>
  range_gte?: InputMaybe<Scalars['Int']['input']>
  range_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  range_lt?: InputMaybe<Scalars['Int']['input']>
  range_lte?: InputMaybe<Scalars['Int']['input']>
  range_not?: InputMaybe<Scalars['Int']['input']>
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  specialRules?: InputMaybe<CfSpecialRuleNestedFilter>
  specialRulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  strength?: InputMaybe<Scalars['Int']['input']>
  strength_exists?: InputMaybe<Scalars['Boolean']['input']>
  strength_gt?: InputMaybe<Scalars['Int']['input']>
  strength_gte?: InputMaybe<Scalars['Int']['input']>
  strength_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  strength_lt?: InputMaybe<Scalars['Int']['input']>
  strength_lte?: InputMaybe<Scalars['Int']['input']>
  strength_not?: InputMaybe<Scalars['Int']['input']>
  strength_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type BlackPowderWeaponLinkingCollectionsHenchmanCollectionOrder =
  | 'count_ASC'
  | 'count_DESC'
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type BlackPowderWeaponLinkingCollectionsHeroCollectionOrder =
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type BlackPowderWeaponOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'range_ASC'
  | 'range_DESC'
  | 'strength_ASC'
  | 'strength_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type BlackPowderWeaponSpecialRulesCollectionOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export type EntryOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type HenchmanEquipmentFilter = {
  AND?: InputMaybe<Array<InputMaybe<HenchmanEquipmentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HenchmanEquipmentFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  specialRulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type HenchmanFilter = {
  AND?: InputMaybe<Array<InputMaybe<HenchmanFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HenchmanFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  count?: InputMaybe<Scalars['Int']['input']>
  count_exists?: InputMaybe<Scalars['Boolean']['input']>
  count_gt?: InputMaybe<Scalars['Int']['input']>
  count_gte?: InputMaybe<Scalars['Int']['input']>
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  count_lt?: InputMaybe<Scalars['Int']['input']>
  count_lte?: InputMaybe<Scalars['Int']['input']>
  count_not?: InputMaybe<Scalars['Int']['input']>
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  equipment?: InputMaybe<CfequipmentMultiTypeNestedFilter>
  equipmentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience?: InputMaybe<Scalars['Int']['input']>
  experience_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience_gt?: InputMaybe<Scalars['Int']['input']>
  experience_gte?: InputMaybe<Scalars['Int']['input']>
  experience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  experience_lt?: InputMaybe<Scalars['Int']['input']>
  experience_lte?: InputMaybe<Scalars['Int']['input']>
  experience_not?: InputMaybe<Scalars['Int']['input']>
  experience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  meta_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats?: InputMaybe<Scalars['String']['input']>
  stats_contains?: InputMaybe<Scalars['String']['input']>
  stats_exists?: InputMaybe<Scalars['Boolean']['input']>
  stats_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats_not?: InputMaybe<Scalars['String']['input']>
  stats_not_contains?: InputMaybe<Scalars['String']['input']>
  stats_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']['input']>
  type_contains?: InputMaybe<Scalars['String']['input']>
  type_exists?: InputMaybe<Scalars['Boolean']['input']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type_not?: InputMaybe<Scalars['String']['input']>
  type_not_contains?: InputMaybe<Scalars['String']['input']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type HenchmanLinkingCollectionsRosterCollectionOrder =
  | 'gold_ASC'
  | 'gold_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'wyrdstone_ASC'
  | 'wyrdstone_DESC'

export type HenchmanOrder =
  | 'count_ASC'
  | 'count_DESC'
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type HeroEquipmentFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroEquipmentFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HeroEquipmentFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  specialRulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  equipment?: InputMaybe<CfequipmentMultiTypeNestedFilter>
  equipmentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience?: InputMaybe<Scalars['Int']['input']>
  experience_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience_gt?: InputMaybe<Scalars['Int']['input']>
  experience_gte?: InputMaybe<Scalars['Int']['input']>
  experience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  experience_lt?: InputMaybe<Scalars['Int']['input']>
  experience_lte?: InputMaybe<Scalars['Int']['input']>
  experience_not?: InputMaybe<Scalars['Int']['input']>
  experience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  meta_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats?: InputMaybe<Scalars['String']['input']>
  stats_contains?: InputMaybe<Scalars['String']['input']>
  stats_exists?: InputMaybe<Scalars['Boolean']['input']>
  stats_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats_not?: InputMaybe<Scalars['String']['input']>
  stats_not_contains?: InputMaybe<Scalars['String']['input']>
  stats_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']['input']>
  type_contains?: InputMaybe<Scalars['String']['input']>
  type_exists?: InputMaybe<Scalars['Boolean']['input']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type_not?: InputMaybe<Scalars['String']['input']>
  type_not_contains?: InputMaybe<Scalars['String']['input']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type HeroLinkingCollectionsRosterCollectionOrder =
  | 'gold_ASC'
  | 'gold_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'wyrdstone_ASC'
  | 'wyrdstone_DESC'

export type HeroOrder =
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type ImageFormat = 'AVIF' | 'JPG' | 'JPG_PROGRESSIVE' | 'PNG' | 'PNG8' | 'WEBP'

export type ImageResizeFocus =
  | 'BOTTOM'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'CENTER'
  | 'FACE'
  | 'FACES'
  | 'LEFT'
  | 'RIGHT'
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'

export type ImageResizeStrategy = 'CROP' | 'FILL' | 'FIT' | 'PAD' | 'SCALE' | 'THUMB'

export type ImageTransformOptions = {
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  format?: InputMaybe<ImageFormat>
  height?: InputMaybe<Scalars['Dimension']['input']>
  quality?: InputMaybe<Scalars['Quality']['input']>
  resizeFocus?: InputMaybe<ImageResizeFocus>
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  width?: InputMaybe<Scalars['Dimension']['input']>
}

export type MeleeWeaponFilter = {
  AND?: InputMaybe<Array<InputMaybe<MeleeWeaponFilter>>>
  OR?: InputMaybe<Array<InputMaybe<MeleeWeaponFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  range?: InputMaybe<Scalars['Int']['input']>
  range_exists?: InputMaybe<Scalars['Boolean']['input']>
  range_gt?: InputMaybe<Scalars['Int']['input']>
  range_gte?: InputMaybe<Scalars['Int']['input']>
  range_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  range_lt?: InputMaybe<Scalars['Int']['input']>
  range_lte?: InputMaybe<Scalars['Int']['input']>
  range_not?: InputMaybe<Scalars['Int']['input']>
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  specialRules?: InputMaybe<CfSpecialRuleNestedFilter>
  specialRulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  strength?: InputMaybe<Scalars['Int']['input']>
  strength_exists?: InputMaybe<Scalars['Boolean']['input']>
  strength_gt?: InputMaybe<Scalars['Int']['input']>
  strength_gte?: InputMaybe<Scalars['Int']['input']>
  strength_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  strength_lt?: InputMaybe<Scalars['Int']['input']>
  strength_lte?: InputMaybe<Scalars['Int']['input']>
  strength_not?: InputMaybe<Scalars['Int']['input']>
  strength_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type MeleeWeaponLinkingCollectionsHenchmanCollectionOrder =
  | 'count_ASC'
  | 'count_DESC'
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type MeleeWeaponLinkingCollectionsHeroCollectionOrder =
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type MeleeWeaponOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'range_ASC'
  | 'range_DESC'
  | 'strength_ASC'
  | 'strength_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type MeleeWeaponSpecialRulesCollectionOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'

export type RosterFilter = {
  AND?: InputMaybe<Array<InputMaybe<RosterFilter>>>
  OR?: InputMaybe<Array<InputMaybe<RosterFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  gold?: InputMaybe<Scalars['Int']['input']>
  gold_exists?: InputMaybe<Scalars['Boolean']['input']>
  gold_gt?: InputMaybe<Scalars['Int']['input']>
  gold_gte?: InputMaybe<Scalars['Int']['input']>
  gold_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  gold_lt?: InputMaybe<Scalars['Int']['input']>
  gold_lte?: InputMaybe<Scalars['Int']['input']>
  gold_not?: InputMaybe<Scalars['Int']['input']>
  gold_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  henchmen?: InputMaybe<CfHenchmanNestedFilter>
  henchmenCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  heroes?: InputMaybe<CfHeroNestedFilter>
  heroesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  storage_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  storage_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  storage_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  storage_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']['input']>
  type_contains?: InputMaybe<Scalars['String']['input']>
  type_exists?: InputMaybe<Scalars['Boolean']['input']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type_not?: InputMaybe<Scalars['String']['input']>
  type_not_contains?: InputMaybe<Scalars['String']['input']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  wyrdstone?: InputMaybe<Scalars['Int']['input']>
  wyrdstone_exists?: InputMaybe<Scalars['Boolean']['input']>
  wyrdstone_gt?: InputMaybe<Scalars['Int']['input']>
  wyrdstone_gte?: InputMaybe<Scalars['Int']['input']>
  wyrdstone_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  wyrdstone_lt?: InputMaybe<Scalars['Int']['input']>
  wyrdstone_lte?: InputMaybe<Scalars['Int']['input']>
  wyrdstone_not?: InputMaybe<Scalars['Int']['input']>
  wyrdstone_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type RosterHenchmenCollectionOrder =
  | 'count_ASC'
  | 'count_DESC'
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type RosterHeroesCollectionOrder =
  | 'experience_ASC'
  | 'experience_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'stats_ASC'
  | 'stats_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'

export type RosterOrder =
  | 'gold_ASC'
  | 'gold_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'wyrdstone_ASC'
  | 'wyrdstone_DESC'

export type SpecialRuleFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpecialRuleFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SpecialRuleFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SpecialRuleLinkingCollectionsArmourCollectionOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type SpecialRuleLinkingCollectionsBlackPowderWeaponCollectionOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'range_ASC'
  | 'range_DESC'
  | 'strength_ASC'
  | 'strength_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type SpecialRuleLinkingCollectionsMeleeWeaponCollectionOrder =
  | 'name_ASC'
  | 'name_DESC'
  | 'range_ASC'
  | 'range_DESC'
  | 'strength_ASC'
  | 'strength_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'

export type SpecialRuleOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC'

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
}

export type CfHenchmanNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHenchmanNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfHenchmanNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  count?: InputMaybe<Scalars['Int']['input']>
  count_exists?: InputMaybe<Scalars['Boolean']['input']>
  count_gt?: InputMaybe<Scalars['Int']['input']>
  count_gte?: InputMaybe<Scalars['Int']['input']>
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  count_lt?: InputMaybe<Scalars['Int']['input']>
  count_lte?: InputMaybe<Scalars['Int']['input']>
  count_not?: InputMaybe<Scalars['Int']['input']>
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  equipmentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience?: InputMaybe<Scalars['Int']['input']>
  experience_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience_gt?: InputMaybe<Scalars['Int']['input']>
  experience_gte?: InputMaybe<Scalars['Int']['input']>
  experience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  experience_lt?: InputMaybe<Scalars['Int']['input']>
  experience_lte?: InputMaybe<Scalars['Int']['input']>
  experience_not?: InputMaybe<Scalars['Int']['input']>
  experience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  meta_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats?: InputMaybe<Scalars['String']['input']>
  stats_contains?: InputMaybe<Scalars['String']['input']>
  stats_exists?: InputMaybe<Scalars['Boolean']['input']>
  stats_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats_not?: InputMaybe<Scalars['String']['input']>
  stats_not_contains?: InputMaybe<Scalars['String']['input']>
  stats_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']['input']>
  type_contains?: InputMaybe<Scalars['String']['input']>
  type_exists?: InputMaybe<Scalars['Boolean']['input']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type_not?: InputMaybe<Scalars['String']['input']>
  type_not_contains?: InputMaybe<Scalars['String']['input']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CfHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfHeroNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  equipmentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience?: InputMaybe<Scalars['Int']['input']>
  experience_exists?: InputMaybe<Scalars['Boolean']['input']>
  experience_gt?: InputMaybe<Scalars['Int']['input']>
  experience_gte?: InputMaybe<Scalars['Int']['input']>
  experience_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  experience_lt?: InputMaybe<Scalars['Int']['input']>
  experience_lte?: InputMaybe<Scalars['Int']['input']>
  experience_not?: InputMaybe<Scalars['Int']['input']>
  experience_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  meta_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats?: InputMaybe<Scalars['String']['input']>
  stats_contains?: InputMaybe<Scalars['String']['input']>
  stats_exists?: InputMaybe<Scalars['Boolean']['input']>
  stats_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  stats_not?: InputMaybe<Scalars['String']['input']>
  stats_not_contains?: InputMaybe<Scalars['String']['input']>
  stats_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  type?: InputMaybe<Scalars['String']['input']>
  type_contains?: InputMaybe<Scalars['String']['input']>
  type_exists?: InputMaybe<Scalars['Boolean']['input']>
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  type_not?: InputMaybe<Scalars['String']['input']>
  type_not_contains?: InputMaybe<Scalars['String']['input']>
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CfSpecialRuleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSpecialRuleNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfSpecialRuleNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CfequipmentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfequipmentMultiTypeNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfequipmentMultiTypeNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  specialRulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type DetailPageLookupQueryVariables = Exact<{ [key: string]: never }>

export type DetailPageLookupQuery = {
  __typename?: 'Query'
  rosterCollection?: {
    __typename?: 'RosterCollection'
    items: Array<{ __typename?: 'Roster'; sys: { __typename?: 'Sys'; id: string } } | null>
  } | null
}

export type DetailPageQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type DetailPageQuery = {
  __typename?: 'Query'
  roster?: {
    __typename?: 'Roster'
    name?: string | null
    type?: string | null
    gold?: number | null
    wyrdstone?: number | null
    storage?: Array<string | null> | null
    heroesCollection?: {
      __typename?: 'RosterHeroesCollection'
      items: Array<{
        __typename?: 'Hero'
        name?: string | null
        type?: string | null
        stats?: string | null
        meta?: Array<string | null> | null
        experience?: number | null
        sys: { __typename?: 'Sys'; id: string }
        equipmentCollection?: {
          __typename?: 'HeroEquipmentCollection'
          items: Array<
            | {
                __typename?: 'Armour'
                name?: string | null
                sys: { __typename?: 'Sys'; id: string }
                description?: { __typename?: 'ArmourDescription'; json: any } | null
                specialRulesCollection?: {
                  __typename?: 'ArmourSpecialRulesCollection'
                  items: Array<{
                    __typename?: 'SpecialRule'
                    title?: string | null
                    description?: { __typename?: 'SpecialRuleDescription'; json: any } | null
                  } | null>
                } | null
              }
            | {
                __typename?: 'BlackPowderWeapon'
                name?: string | null
                sys: { __typename?: 'Sys'; id: string }
                description?: { __typename?: 'BlackPowderWeaponDescription'; json: any } | null
                specialRulesCollection?: {
                  __typename?: 'BlackPowderWeaponSpecialRulesCollection'
                  items: Array<{
                    __typename?: 'SpecialRule'
                    title?: string | null
                    description?: { __typename?: 'SpecialRuleDescription'; json: any } | null
                  } | null>
                } | null
              }
            | {
                __typename?: 'MeleeWeapon'
                name?: string | null
                sys: { __typename?: 'Sys'; id: string }
                description?: { __typename?: 'MeleeWeaponDescription'; json: any } | null
                specialRulesCollection?: {
                  __typename?: 'MeleeWeaponSpecialRulesCollection'
                  items: Array<{
                    __typename?: 'SpecialRule'
                    title?: string | null
                    description?: { __typename?: 'SpecialRuleDescription'; json: any } | null
                  } | null>
                } | null
              }
            | null
          >
        } | null
      } | null>
    } | null
    henchmenCollection?: {
      __typename?: 'RosterHenchmenCollection'
      items: Array<{
        __typename?: 'Henchman'
        name?: string | null
        count?: number | null
        type?: string | null
        stats?: string | null
        meta?: Array<string | null> | null
        experience?: number | null
        sys: { __typename?: 'Sys'; id: string }
        equipmentCollection?: {
          __typename?: 'HenchmanEquipmentCollection'
          items: Array<
            | {
                __typename?: 'Armour'
                name?: string | null
                sys: { __typename?: 'Sys'; id: string }
                description?: { __typename?: 'ArmourDescription'; json: any } | null
                specialRulesCollection?: {
                  __typename?: 'ArmourSpecialRulesCollection'
                  items: Array<{
                    __typename?: 'SpecialRule'
                    title?: string | null
                    description?: { __typename?: 'SpecialRuleDescription'; json: any } | null
                  } | null>
                } | null
              }
            | {
                __typename?: 'BlackPowderWeapon'
                name?: string | null
                sys: { __typename?: 'Sys'; id: string }
                description?: { __typename?: 'BlackPowderWeaponDescription'; json: any } | null
                specialRulesCollection?: {
                  __typename?: 'BlackPowderWeaponSpecialRulesCollection'
                  items: Array<{
                    __typename?: 'SpecialRule'
                    title?: string | null
                    description?: { __typename?: 'SpecialRuleDescription'; json: any } | null
                  } | null>
                } | null
              }
            | {
                __typename?: 'MeleeWeapon'
                name?: string | null
                sys: { __typename?: 'Sys'; id: string }
                description?: { __typename?: 'MeleeWeaponDescription'; json: any } | null
                specialRulesCollection?: {
                  __typename?: 'MeleeWeaponSpecialRulesCollection'
                  items: Array<{
                    __typename?: 'SpecialRule'
                    title?: string | null
                    description?: { __typename?: 'SpecialRuleDescription'; json: any } | null
                  } | null>
                } | null
              }
            | null
          >
        } | null
      } | null>
    } | null
  } | null
}

export type RootPageQueryVariables = Exact<{ [key: string]: never }>

export type RootPageQuery = {
  __typename?: 'Query'
  rosterCollection?: {
    __typename?: 'RosterCollection'
    items: Array<{
      __typename?: 'Roster'
      name?: string | null
      type?: string | null
      sys: { __typename?: 'Sys'; id: string }
    } | null>
  } | null
}
