import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface UseBooleanOutput {
	value: boolean
	setValue: Dispatch<SetStateAction<boolean>>
	setTrue: () => void
	setFalse: () => void
	toggle: () => void
}

/**
 * Hook that provides boolean state with utility functions.
 *
 * @param {boolean} [defaultValue] - The initial value for the boolean state.
 * @returns {UseBooleanOutput} - Object containing the boolean value and utility functions.
 */
export function useBoolean(defaultValue?: boolean): UseBooleanOutput {
	const [value, setValue] = useState(!!defaultValue)

	/**
	 * Sets the boolean value to `true`.
	 *
	 * @type {() => void}
	 */
	const setTrue = useCallback(() => setValue(true), [])

	/**
	 * Sets the boolean value to `false`.
	 *
	 * @type {() => void}
	 */
	const setFalse = useCallback(() => setValue(false), [])

	/**
	 * Toggles the boolean value.
	 *
	 * @type {() => void}
	 */
	const toggle = useCallback(() => setValue((x) => !x), [])

	return { value, setValue, setTrue, setFalse, toggle }
}
