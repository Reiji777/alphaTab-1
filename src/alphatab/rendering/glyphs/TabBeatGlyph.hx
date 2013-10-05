package alphatab.rendering.glyphs;
import alphatab.model.Beat;
import alphatab.model.Duration;
import alphatab.model.GraceType;
import alphatab.model.Note;
import alphatab.model.SlideType;
import alphatab.platform.ICanvas;
import alphatab.rendering.Glyph;
import alphatab.rendering.TabBarRenderer;

class TabBeatGlyph extends BeatGlyphBase
{
	public var noteNumbers : TabNoteChordGlyph;

	public function new() 
	{
		super();
	}
	
	public override function doLayout():Void 
	{
		// create glyphs
		if (!container.beat.isRest())
        {
			//
            // Note numbers
            noteNumbers = new TabNoteChordGlyph();
            noteNumbers.beat = container.beat;
            noteLoop( function(n) {
                createNoteGlyph(n);
            });
            addGlyph(noteNumbers);	
            
            //
            // Whammy Bar
            if (container.beat.hasWhammyBar() && !noteNumbers.beatEffects.exists("Whammy"))
            {
                noteNumbers.beatEffects.set("Whammy",  new WhammyBarGlyph(container.beat, container));
            }
            
            //
            // Tremolo Picking
            if (container.beat.isTremolo() && !noteNumbers.beatEffects.exists("Tremolo"))
            {
                noteNumbers.beatEffects.set("Tremolo",  new TremoloPickingGlyph(0, 0, container.beat.tremoloSpeed));
            }
		}
		
		// left to right layout
		var w = 0;
		for (g in _glyphs)
		{
			g.x = w;
			g.renderer = renderer;
			g.doLayout();
			w += g.width;
		}	
		width = w;
	} 
    
	private function createNoteGlyph(n:Note) 
    {
		var isGrace = container.beat.graceType != GraceType.None;
		var tr = cast(renderer, TabBarRenderer);
        var noteNumberGlyph:Glyph = new NoteNumberGlyph(0, 0, n, isGrace);    
		var l = n.beat.voice.bar.track.tuning.length - n.string + 1;
        noteNumberGlyph.y = tr.getTabY(l, -2);
        noteNumbers.addNoteGlyph(noteNumberGlyph, n);
    }	
}