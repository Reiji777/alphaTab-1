// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Staff } from "@src/model/Staff";
import { JsonHelper } from "@src/io/JsonHelper";
import { BarSerializer } from "@src/generated/model/BarSerializer";
import { ChordSerializer } from "@src/generated/model/ChordSerializer";
import { TuningSerializer } from "@src/generated/model/TuningSerializer";
import { Bar } from "@src/model/Bar";
import { Chord } from "@src/model/Chord";
export class StaffSerializer {
    public static fromJson(obj: Staff, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k, v)); 
    }
    public static toJson(obj: Staff | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("bars", obj.bars.map(i => BarSerializer.toJson(i))); 
        {
            const m = new Map<string, unknown>();
            o.set("chords", m);
            for (const [k, v] of obj.chords) {
                m.set(k.toString(), ChordSerializer.toJson(v));
            }
        } 
        o.set("capo", obj.capo); 
        o.set("transpositionpitch", obj.transpositionPitch); 
        o.set("displaytranspositionpitch", obj.displayTranspositionPitch); 
        o.set("stringtuning", TuningSerializer.toJson(obj.stringTuning)); 
        o.set("showtablature", obj.showTablature); 
        o.set("showstandardnotation", obj.showStandardNotation); 
        o.set("ispercussion", obj.isPercussion); 
        o.set("standardnotationlinecount", obj.standardNotationLineCount); 
        return o; 
    }
    public static setProperty(obj: Staff, property: string, v: unknown): boolean {
        switch (property) {
            case "bars":
                obj.bars = [];
                for (const o of v as (Map<string, unknown> | null)[]) {
                    const i = new Bar();
                    BarSerializer.fromJson(i, o)
                    obj.addBar(i);
                }
                return true;
            case "chords":
                obj.chords = new Map<string, Chord>();
                JsonHelper.forEach(v, (v, k) => {
                    const i = new Chord(); 
                    ChordSerializer.fromJson(i, v as Map<string, unknown>); 
                    obj.addChord(k, i); 
                });
                return true;
            case "capo":
                obj.capo = v! as number;
                return true;
            case "transpositionpitch":
                obj.transpositionPitch = v! as number;
                return true;
            case "displaytranspositionpitch":
                obj.displayTranspositionPitch = v! as number;
                return true;
            case "showtablature":
                obj.showTablature = v! as boolean;
                return true;
            case "showstandardnotation":
                obj.showStandardNotation = v! as boolean;
                return true;
            case "ispercussion":
                obj.isPercussion = v! as boolean;
                return true;
            case "standardnotationlinecount":
                obj.standardNotationLineCount = v! as number;
                return true;
        } 
        if (["stringtuning"].indexOf(property) >= 0) {
            TuningSerializer.fromJson(obj.stringTuning, v as Map<string, unknown>);
            return true;
        } 
        return false; 
    }
}

