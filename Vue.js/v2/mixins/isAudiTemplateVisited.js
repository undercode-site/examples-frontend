import {audiBrand, cookieNames} from "@/utils/_consts";

export default {
    computed: {
        isAudiTemplateVisited() {
            const template = this.$store.state.rent?.form?.template;
            return this.$cookies.get(cookieNames.audiTemplateVisited) && template === audiBrand;
        },
    },
}
