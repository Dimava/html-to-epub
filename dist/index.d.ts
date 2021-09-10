import type { CompleteEpubOptions, EpubImage, EpubOptions, filepath } from "./types";
export type { CompleteEpubOptions, EpubImage, EpubOptions, filepath } from "./types";
export declare class Epub implements PromiseLike<void> {
    static Epub: typeof Epub;
    options: CompleteEpubOptions;
    defer: Promise<void> & {
        resolve: (value: void | PromiseLike<void>) => void;
        reject: (reason?: any) => void;
    };
    id: string;
    uuid: string;
    constructor(options: EpubOptions, output?: filepath);
    then<TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): PromiseLike<TResult1 | TResult2>;
    render(): Promise<void>;
    generateTempFile(): Promise<void>;
    makeCover(): void | Promise<void>;
    downloadImage(options: EpubImage): Promise<unknown>;
    downloadAllImage(): Promise<unknown[] | undefined>;
    genEpub(): Promise<void>;
}
export default Epub;
