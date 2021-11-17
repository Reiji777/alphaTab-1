import { IReadable } from '@src/io/IReadable';
import { Score } from '@src/model/Score';
import { Settings } from '@src/Settings';

/**
 * This is the base public class for creating new song importers which
 * enable reading scores from any binary datasource
 */
export abstract class ScoreImporter {
    protected data!: IReadable;
    protected settings!: Settings;
    protected _mergeWithScore: unknown;

    /**
     * Initializes the importer with the given data and settings.
     */
    public init(data: IReadable, settings: Settings, mergeWithScore?: Score): void {
        this.data = data;
        this.settings = settings;
        if (mergeWithScore) {
            this._mergeWithScore = mergeWithScore;
        }
    }

    public abstract get name(): string;

    /**
     * Reads the {@link Score} contained in the data.
     * @returns The score that was contained in the data.
     */
    public abstract readScore(): Score;
}
