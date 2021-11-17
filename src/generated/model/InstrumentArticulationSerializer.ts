// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { InstrumentArticulation } from "@src/model/InstrumentArticulation";
import { JsonHelper } from "@src/io/JsonHelper";
import { MusicFontSymbol } from "@src/model/MusicFontSymbol";
import { TextBaseline } from "@src/platform/ICanvas";
export class InstrumentArticulationSerializer {
    public static fromJson(obj: InstrumentArticulation, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: InstrumentArticulation | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("elementType", obj.elementType); 
        o.set("staffLine", obj.staffLine); 
        o.set("noteHeadDefault", obj.noteHeadDefault as number); 
        o.set("noteHeadHalf", obj.noteHeadHalf as number); 
        o.set("noteHeadWhole", obj.noteHeadWhole as number); 
        o.set("techniqueSymbol", obj.techniqueSymbol as number); 
        o.set("techniqueSymbolPlacement", obj.techniqueSymbolPlacement as number); 
        o.set("outputMidiNumber", obj.outputMidiNumber); 
        return o; 
    }
    public static setProperty(obj: InstrumentArticulation, property: string, v: unknown): boolean {
        switch (property) {
            case "elementtype":
                obj.elementType = v as string;
                return true;
            case "staffline":
                obj.staffLine = v as number;
                return true;
            case "noteheaddefault":
                obj.noteHeadDefault = JsonHelper.parseEnum<MusicFontSymbol>(v, MusicFontSymbol)!;
                return true;
            case "noteheadhalf":
                obj.noteHeadHalf = JsonHelper.parseEnum<MusicFontSymbol>(v, MusicFontSymbol)!;
                return true;
            case "noteheadwhole":
                obj.noteHeadWhole = JsonHelper.parseEnum<MusicFontSymbol>(v, MusicFontSymbol)!;
                return true;
            case "techniquesymbol":
                obj.techniqueSymbol = JsonHelper.parseEnum<MusicFontSymbol>(v, MusicFontSymbol)!;
                return true;
            case "techniquesymbolplacement":
                obj.techniqueSymbolPlacement = JsonHelper.parseEnum<TextBaseline>(v, TextBaseline)!;
                return true;
            case "outputmidinumber":
                obj.outputMidiNumber = v as number;
                return true;
        } 
        return false; 
    }
}

