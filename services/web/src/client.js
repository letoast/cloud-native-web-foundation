import * as sapper from '@sapper/app';
import { initFeatureToggles } from './feature-toggles/index.js'

initFeatureToggles()

sapper.start({
	target: document.querySelector('#sapper')
});