import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/mordheim-companion` ||
      '']: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    'src/types/contentful/contentful.schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/types/contentful/contentful.ts': {
      hooks: {
        afterOneFileWrite: ['npx eslint --fix', 'npx prettier --write'],
      },
      overwrite: true,
      documents: ['src/app/**/page.tsx', 'src/modules/**/*.tsx'],
      plugins: ['typescript', 'typescript-operations'],
      config: {
        enumsAsTypes: true,
        onlyOperationTypes: true,
        preResolveTypes: true,
        useImplementingTypes: true,
        disableDescriptions: true,
      },
    },
  },
}

export default config
