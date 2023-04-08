
import { defineCliConfig } from 'sanity/cli'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const projectId = '8m2psc99'

export default defineCliConfig({
    api: {
        projectId,
        dataset,
    }
})
