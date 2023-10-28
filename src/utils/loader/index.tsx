import type { AnyProps, LoadComponent, LoaderDefaultOptions } from './types'

import { loaderConfig as loaderDefaultOptions } from '@/app/config/loaderConfig'
import { Loading } from '@/components/Loading'
import asyncComponentLoader from './loader'

const configuredAsyncComponentLoader = (
	loadComponent: LoadComponent,
	additionalProps: AnyProps = {},
	loaderOptions: LoaderDefaultOptions = loaderDefaultOptions,
	FallbackWaiting = Loading
) => asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting)

export { loaderDefaultOptions }
export default configuredAsyncComponentLoader
