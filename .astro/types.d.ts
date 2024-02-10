declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"astro/1.md": {
	id: "astro/1.md";
  slug: "astro/1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"astro/2.md": {
	id: "astro/2.md";
  slug: "astro/2";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"astro/3.md": {
	id: "astro/3.md";
  slug: "astro/3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"astro/4.md": {
	id: "astro/4.md";
  slug: "astro/4";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"astro/5.md": {
	id: "astro/5.md";
  slug: "astro/5";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"onboarding": {
"Introduction.md": {
	id: "Introduction.md";
  slug: "introduction";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"accounts.md": {
	id: "accounts.md";
  slug: "accounts";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"books.md": {
	id: "books.md";
  slug: "books";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"chat.md": {
	id: "chat.md";
  slug: "chat";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"console.md": {
	id: "console.md";
  slug: "console";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"data.md": {
	id: "data.md";
  slug: "data";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"draw.md": {
	id: "draw.md";
  slug: "draw";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"gateway.md": {
	id: "gateway.md";
  slug: "gateway";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"link.md": {
	id: "link.md";
  slug: "link";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"onuii.md": {
	id: "onuii.md";
  slug: "onuii";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"order.md": {
	id: "order.md";
  slug: "order";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"pay.md": {
	id: "pay.md";
  slug: "pay";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"plot.md": {
	id: "plot.md";
  slug: "plot";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"policies.md": {
	id: "policies.md";
  slug: "policies";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"port.md": {
	id: "port.md";
  slug: "port";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"seoltab.md": {
	id: "seoltab.md";
  slug: "seoltab";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"serverless.md": {
	id: "serverless.md";
  slug: "serverless";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"ticket.md": {
	id: "ticket.md";
  slug: "ticket";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
"workspace.md": {
	id: "workspace.md";
  slug: "workspace";
  body: string;
  collection: "onboarding";
  data: InferEntrySchema<"onboarding">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
