// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Fermata } from "@src/model/Fermata";
import { JsonHelper } from "@src/io/JsonHelper";
import { FermataType } from "@src/model/Fermata";
export class FermataSerializer {
    public static fromJson(obj: Fermata, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: Fermata | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("type", obj.type as number); 
        o.set("length", obj.length); 
        return o; 
    }
    public static setProperty(obj: Fermata, property: string, v: unknown): boolean {
        switch (property) {
            case "type":
                obj.type = JsonHelper.parseEnum<FermataType>(v, FermataType)!;
                return true;
            case "length":
                obj.length = v as number;
                return true;
        } 
        return false; 
    }
}

