
interface EngineFunc {
	(filePath: string, options: any, callback: (err: any, html?: string | null) => any): any
}

declare namespace simplicity {
	export const engine: () => EngineFunc
}

declare function simplicity(): EngineFunc

export = simplicity;