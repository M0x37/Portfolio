# Design-Guidelines

Diese Guidelines beschreiben das bestehende Design des M0x37-Portfolios. Sie sind bewusst an den aktuellen Seiten und Stylesheets ausgerichtet und sollen neue Inhalte so ergänzen, dass sie sich nahtlos einfügen.

## Designprinzip

- Minimalistisches, textorientiertes Portfolio mit technischem Charakter.
- Großzügige freie Flächen; Inhalte bleiben schmal und linksbündig lesbar.
- Systemfarben statt fest verdrahteter heller oder dunkler Flächen: Das Design folgt dem Light-/Dark-Mode des Betriebssystems.
- Monospace, Versalien und feine Rasterlinien geben Navigation und Metadaten einen ruhigen Terminal-/Editorial-Look.
- Farbe wird sparsam eingesetzt: hauptsächlich für Links, Fokus und kleine Hervorhebungen.
- Keine zusätzlichen UI-Bibliotheken oder externen Schriftarten für neue Komponenten einführen.

## Farben und Flächen

Die zentrale Farbquelle ist `:root` in `css/style.css`.

| Verwendung | Token / Wert |
|---|---|
| Seitenhintergrund | `--color-bg`: Weiß im Light-Mode, Schwarz im Dark-Mode |
| Haupttext und Icons | `CanvasText` / `--color-ink` |
| Fließtext | `--color-body`: `CanvasText` mit 30 % Mischung im Light-Mode, 4 % im Dark-Mode |
| Sekundärtext | `--color-muted`: 40 % bzw. 20 % Mischung |
| Dezente Hinweise | `--color-faint`: 46 % bzw. 30 % Mischung |
| Linien und Umrandungen | `--color-rule`: `CanvasText` mit 90 % bzw. 80 % Transparenz |
| Akzent | `--color-accent`: Rot (`oklch(57.7% 0.245 27.325)`) im Light-Mode; helleres Rot (`oklch(70.4% 0.191 22.216)`) im Dark-Mode |

- Für neue UI-Elemente die vorhandenen Tokens verwenden, statt Farben lokal neu zu definieren.
- Die Seitenfläche hat ein dezentes, feststehendes 40-px-Raster. Es wird über `body::before` erzeugt und mit einem diagonalen Verlauf ausgeblendet. Keine zusätzlichen dekorativen Muster konkurrierend hinzufügen.
- Kartenflächen werden nur leicht vom Hintergrund abgesetzt; Umrandungen bleiben dünn und zurückhaltend.

## Typografie

- Standardschrift: `--font-sans` (System-UI-Schriften).
- Navigation, Metadaten, Seitenuntertitel, Status-/Kontaktinformationen und Footer: `--font-mono`.
- Fließtext bleibt in der Sans-Schrift und nutzt ein leichtes Grundgewicht (`300` auf `body`).
- Überschriften der Seiten sind Namemarks als SVG-Text, keine zusätzlichen Display-Fonts.
- Der große Seitentitel verwendet `clamp(4rem, 3.83rem + 0.726vw, 4.511rem)` und `line-height: 1`.
- Seitentitel-Untertitel: Monospace, `0.75rem`, Gewicht `500`, Versalien, Zeichenabstand `0.08em`, Zeilenhöhe `1.35`.
- Metadaten: `0.75rem`, Monospace, Versalien, Zeichenabstand `0.06em`, üblicherweise Gewicht `500`.
- Kleine Footer-Metadaten: `0.625rem`, Monospace, Versalien, Zeichenabstand `0.06em`.
- Fließtext auf Projektkarten: `15px`, Zeilenhöhe `1.65`; Projektüberschriften skalieren mit `clamp(26px, 2.2vw, 36px)`.
- Bei neuen Textstilen zuerst vorhandene Utility-Klassen wie `.font-mono`, `.text-meta`, `.text-muted`, `.leading-1-35` und `.uppercase` verwenden.

## Layout und Abstände

- Hauptinhalt ist maximal `600px` breit (`--spacing-content`), auf schmalen Viewports begrenzt auf `100vw - 3rem`.
- Inhalt horizontal zentrieren; auf Mobilgeräten links und rechts mindestens `1.5rem` Außenabstand lassen.
- Der Hauptbereich beginnt mit `20vh` oberem Innenabstand. Header, Intro, Navigation und Inhaltsabschnitte folgen diesem vertikalen Rhythmus.
- Das Basissystem für Abstände ist `--spacing: 0.25rem`. Vorhandene Utility-Klassen bilden Vielfache davon ab.
- Header-Titel und Untertitel sind eng gruppiert; größere Abstände trennen anschließend Intro, Abschnittstitel und Karten.
- Listen und Kontaktdaten verwenden kleine, konsistente Gaps statt sichtbarer Trennlinien oder großer Container.
- Der Footer folgt mit deutlichem Abstand auf den Hauptinhalt und darf auf schmalen Bildschirmen umbrechen.

## Navigation, Links und Icons

- Die Home-Navigation sitzt oben links, ist kompakt (`40px` Interaktionsfläche) und nutzt das geometrische SVG-Gem-Logo.
- Interne Navigation erscheint als kleine Monospace-Versalien mit mittigen Punkten als Trennzeichen.
- Normale UI-Links behalten die Textfarbe und wechseln bei Hover/Fokus zu `--color-accent`.
- Prosa-Links sind unterstrichen; die Unterstreichung nutzt den Akzent. Hover/Fokus erhält einen Akzent-Hintergrund und kontrastierende Textfarbe.
- Fokuszustände sind immer sichtbar: `2px` Outline in `--color-accent` mit `2px` Offset.
- Icons sind sparsame, meist monochrome Inline-SVGs mit `1.5px` Stroke und `24 × 24` ViewBox; sie ergänzen Labels, ersetzen sie aber nicht.

## Komponenten

### Seitenkopf

- SVG-Namemark als großes H1, darunter ein kurzer Monospace-Untertitel in Versalien.
- Keine zusätzlichen farbigen Titelcontainer, Schatten oder dekorativen Linien.
- Überschriften brauchen zugänglichen Text, auch wenn die sichtbare Darstellung als SVG umgesetzt ist.

### Projektkarten

- `.project-card` nutzt eine dünne `--color-rule`-Umrandung, leicht abgesetzten Hintergrund und `overflow: hidden`.
- Obere Kartenzeile: Akzent-Nummer links, kompakter pillenförmiger Kategorien-Badge rechts.
- Innenabstand der Kartenzeile: `18px 20px 0`; Karteninhalt: `20px`.
- Technologien erscheinen als umrandete, pillenförmige `.tag`-Elemente und umbrechen bei Bedarf.
- Karten reagieren beim Hover mit Akzent-Umrandung und einer Anhebung um `3px`; Übergangsdauer `0.18s`.
- Projektlinks sind Akzentfarbe, semibold und mit kleinem Pfeil versehen.

### Kontakt- und Presence-Listen

- Kontakt, Standort, Profile und Zeit werden in einem einfachen Grid aus Icon und Text dargestellt.
- Icons sind klein und zunächst entsättigt; interaktive Einträge dürfen beim Hover/Fokus den Akzent verwenden.
- Lange Werte dürfen horizontal geclippt werden, während zugängliche Labels und der eigentliche Linktext erhalten bleiben.
- Die Liste wechselt ab `40rem` zu zwei Spalten.

### Ice Bear

- Der transparente Bear ist ein feststehender Sticker unten rechts, normalerweise `120px` breit und `32px` vom rechten sowie unteren Rand entfernt.
- Das Standbild ist `bear_cutouts/06_final.png`; die Winke-Frames liegen im selben Ordner.
- Während des Winkens wächst der Sticker auf `160px`. Die Animation läuft einmal beim Seitenaufruf und kehrt danach zum Standbild zurück.
- Der Sticker schwebt dezent; Hover hebt ihn leicht an und dreht ihn minimal.
- `prefers-reduced-motion: reduce` deaktiviert die Float-Animation und den Winke-Ablauf.
- Der Bear muss außerhalb des `.reveal`-Wrappers bleiben: Transformierte Vorfahren können die feste Viewport-Position beeinflussen.

### Skeleton-Ladezustand

- `css/critical.css` enthält nur die minimalen Regeln für das sofortige Skeleton.
- Das Hauptstylesheet `css/style.css` wird parallel vorgeladen; beim Laden wird der Skeleton-Zustand entfernt.
- Skeleton-Flächen sind abgerundet und verwenden eine dezente Mischung aus `CanvasText` und `Canvas`, ohne Akzentfarbe.
- Für neue Seiteninhalte sollte die Skeleton-Silhouette grob deren tatsächliche Form und Position spiegeln.
- Die Skeleton-Pulsanimation wird nur bei `prefers-reduced-motion: no-preference` aktiviert.

## Bewegung

- Animationen sind kurz, zurückhaltend und funktional; keine dauerhaften Aufmerksamkeitseffekte ergänzen.
- Der Seiteninhalt erscheint mit `.reveal` in `0.35s ease-out` nach `0.5s` Verzögerung.
- Das Gem-Logo rotiert langsam in `30s linear`; Hover/Fokus ergänzt einen kurzen `0.65s`-Nudge.
- Hover- und Fokusbewegungen klein halten. Für neue Bewegung `prefers-reduced-motion` berücksichtigen.
- Animationen dürfen die Position des fixierten Bears nicht über einen transformierten Elterncontainer verändern.

## Responsive Verhalten

Die vorhandenen Breakpoints in `css/style.css` sind:

| Breakpoint | Verhalten |
|---|---|
| Ab `40rem` | Navigation/Content-Layouts dürfen horizontal werden; Kontaktlisten erhalten zwei Spalten |
| Ab `64rem` | Hauptnavigation wird fixiert |
| Ab `80rem` | Footer kann in zwei Bereiche nebeneinander wechseln; feste Inhaltsbreite bleibt `600px` |

- Mobile ist der Ausgangspunkt: Inhalte müssen innerhalb der verfügbaren Breite bleiben und Text darf nicht horizontal überlaufen.
- Responsives Verhalten über die bestehenden Breakpoints und Utilities ergänzen, nicht mit neuen uneinheitlichen Schwellenwerten.
- Der feste Bear darf kleine Viewports nicht überdecken; Abstände und Breite bei Bedarf gezielt in einer Media Query reduzieren.

## Barrierefreiheit

- Semantische Elemente (`nav`, `main`, `header`, `section`, `footer`) und eine sinnvolle H1/H2-Hierarchie beibehalten.
- Dekorative SVGs erhalten `aria-hidden="true"`; informative Icons benötigen ein zugängliches Label oder umgebenden Text.
- Interaktive Elemente müssen mit Tastatur bedienbar sein und den vorhandenen Fokus-Outline behalten.
- Ausreichenden Kontrast der Systemfarben im Light- und Dark-Mode sicherstellen.
- Bewegungsreduktion respektieren und den Skeleton als Status kennzeichnen, ohne ihn als dauerhaft sichtbaren Inhalt auszugeben.

## Umsetzung und Pflege

- `css/style.css` ist die Quelle der Design-Tokens und Komponentenstile; `css/critical.css` bleibt auf den frühen Skeleton-Render beschränkt.
- Für gemeinsame Seitenkomponenten die vorhandenen HTML-/CSS-Muster wiederverwenden.
- Neue globale Farben, Breakpoints und Schriften nur einführen, wenn die bestehenden Tokens den Bedarf nicht abdecken.
- Vor dem Abschluss Light- und Dark-Mode, schmale und breite Viewports, Tastaturfokus sowie reduzierte Bewegung prüfen.
