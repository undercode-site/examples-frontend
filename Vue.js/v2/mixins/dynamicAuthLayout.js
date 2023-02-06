import {audiBrand, cookieNames} from "@/utils/_consts";

export default {
    layout({store, $cookies}) {
        const template = store.state.rent?.form?.template;
        if ($cookies.get(cookieNames.audiTemplateVisited) && template === audiBrand) {
            return 'audiAuth';
        }
        return 'auth';
    },
}
