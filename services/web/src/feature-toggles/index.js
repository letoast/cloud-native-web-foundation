import { featureToggleStore } from './store.js'

export const FEATURE_TOGGLES = {
    vipWelcome: {
    name: "feature_vip_welcome"
    }
}

const setFeatureTogglesStore = (configValues) =>
    Object.keys(FEATURE_TOGGLES).forEach( toggleKey => {
        const featureToggleName = FEATURE_TOGGLES[toggleKey].name
        if( configValues[featureToggleName] ) {
            featureToggleStore.setFeatureToggle(
                featureToggleName,
                configValues[featureToggleName].asBoolean()
            )
        }
    })

export const initFeatureToggles = async () => {
    const remoteConfig = window.firebase.remoteConfig();
    await remoteConfig.fetchAndActivate();
    setFeatureTogglesStore(remoteConfig.getAll())
    return remoteConfig;
};
