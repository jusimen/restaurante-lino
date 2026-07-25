# Graph Report - .  (2026-07-25)

## Corpus Check
- 92 files · ~208,961 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 613 nodes · 827 edges · 91 communities (38 shown, 53 thin omitted)
- Extraction: 97% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.71)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- About, Contact, Container
- UI Primitives: Input/Sheet
- ESLint & Dev Tooling
- Routing & Route Pages
- Carousel & React Core
- TypeScript Configuration
- Minor UI Components I
- Button, Calendar, Pagination
- components.json Config
- Command Component
- Menubar Component
- Deployment & Project Metadata
- Form Component
- Error Handling Pipeline
- App Dependencies
- Package Scripts & Config
- ContextMenu Component
- DropdownMenu Component
- AlertDialog Component
- Table Component
- Breadcrumb Component
- Drawer Component
- NavigationMenu Component
- Select Component
- Card Component
- Toggle & ToggleGroup
- Alert Component
- InputOTP Component
- Menu Page & Weekend Menu
- Cabrito Dish Image
- Accordion Component
- Badge Component
- Tabs Component
- Bacalhau Dish Image
- ScrollArea Component
- Sonner Toaster Component
- @cloudflare/vite-plugin
- clsx Dependency
- cmdk Dependency
- date-fns Dependency
- i18next Dependency
- input-otp Dependency
- lucide-react Dependency
- radix-accordion
- radix-alert-dialog
- radix-aspect-ratio
- radix-checkbox
- radix-collapsible
- radix-context-menu
- radix-dialog
- radix-dropdown-menu
- radix-hover-card
- radix-label
- radix-menubar
- radix-navigation-menu
- radix-popover
- radix-progress
- radix-radio-group
- radix-scroll-area
- radix-select
- radix-separator
- radix-slider
- radix-slot
- radix-switch
- radix-tabs
- radix-toggle
- radix-toggle-group
- radix-tooltip
- react-day-picker
- react-i18next
- react-resizable-panels
- recharts Dependency
- sonner Dependency
- tailwind-merge
- tailwindcss
- @tailwindcss/vite
- @tanstack/react-query
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/router-plugin
- tw-animate-css
- vaul Dependency
- vite-tsconfig-paths
- zod Dependency
- Arroz Pica Chao Dish
- Hero Image
- Logo Image

## God Nodes (most connected - your core abstractions)
1. `cn()` - 77 edges
2. `compilerOptions` - 17 edges
3. `Restaurante Lino Site Plan` - 13 edges
4. `getLocaleFromPath()` - 12 edges
5. `scripts` - 8 edges
6. `react` - 8 edges
7. `Navbar()` - 8 edges
8. `FileRoutesByPath` - 8 edges
9. `Container()` - 7 edges
10. `Footer()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Restaurante Lino Site Plan` --references--> `Favicon SVG`  [EXTRACTED]
  README.md → public/favicon.svg
- `CalendarDayButton()` --references--> `react`  [EXTRACTED]
  src/components/ui/calendar.tsx → package.json
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/components/ui/carousel.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/components/ui/form.tsx → package.json

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Frontend Tech Stack** — readme_tanstackstart, readme_react, readme_tailwindv4, readme_typescript [INFERRED 0.95]
- **Visual Design System** — readme_rusticportuguesepalette, readme_cormorantgaramond, readme_inter [INFERRED 0.95]
- **Cloudflare Deployment Pipeline** — _github_workflows_deploy_cloudflare_deployworkflow, _github_workflows_deploy_cloudflare_cloudflareworkers, _github_workflows_deploy_cloudflare_wrangler [INFERRED 0.95]

## Communities (91 total, 53 thin omitted)

### Community 0 - "About, Contact, Container"
Cohesion: 0.09
Nodes (27): About section (website), Restaurante Lino, Chef Jose Gomes (portrait photograph), AboutSection(), ContactSection(), Container(), DishCard(), DishCardProps (+19 more)

### Community 1 - "UI Primitives: Input/Sheet"
Cohesion: 0.05
Nodes (39): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+31 more)

### Community 2 - "ESLint & Dev Tooling"
Cohesion: 0.06
Nodes (33): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @lovable.dev/vite-tanstack-config (+25 more)

### Community 3 - "Routing & Route Pages"
Cohesion: 0.09
Nodes (27): getRouter(), Route, Route, Route, Route, Route, Route, Route (+19 more)

### Community 4 - "Carousel & React Core"
Cohesion: 0.07
Nodes (25): react, react, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem (+17 more)

### Community 5 - "TypeScript Configuration"
Cohesion: 0.07
Nodes (26): DOM, DOM.Iterable, ES2022, eslint.config.js, src/**/*.ts, src/**/*.tsx, vite/client, vite.config.ts (+18 more)

### Community 6 - "Minor UI Components I"
Cohesion: 0.09
Nodes (12): Avatar, AvatarFallback, AvatarImage, Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup (+4 more)

### Community 7 - "Button, Calendar, Pagination"
Cohesion: 0.19
Nodes (16): Button, ButtonProps, buttonVariants, Calendar(), CalendarDayButton(), Pagination(), PaginationContent, PaginationEllipsis() (+8 more)

### Community 8 - "components.json Config"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 9 - "Command Component"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 10 - "Menubar Component"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 11 - "Deployment & Project Metadata"
Cohesion: 0.14
Nodes (16): Cloudflare Workers, Deploy to Cloudflare Workflow, Wrangler, Favicon SVG, Robots.txt, Cormorant Garamond, Inter, JSON-LD Restaurant Schema (+8 more)

### Community 12 - "Form Component"
Cohesion: 0.15
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 13 - "Error Handling Pipeline"
Cohesion: 0.25
Nodes (9): consumeLastCapturedError(), renderErrorPage(), brandedErrorResponse(), fetch(), getServerEntry(), isCatastrophicSsrErrorBody(), normalizeCatastrophicSsrResponse(), ServerEntry (+1 more)

### Community 14 - "App Dependencies"
Cohesion: 0.15
Nodes (13): class-variance-authority, embla-carousel-react, @hookform/resolvers, dependencies, class-variance-authority, embla-carousel-react, @hookform/resolvers, @radix-ui/react-avatar (+5 more)

### Community 15 - "Package Scripts & Config"
Cohesion: 0.15
Nodes (12): name, private, scripts, build, build:dev, deploy, dev, format (+4 more)

### Community 16 - "ContextMenu Component"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 17 - "DropdownMenu Component"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 18 - "AlertDialog Component"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 19 - "Table Component"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 20 - "Breadcrumb Component"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 21 - "Drawer Component"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 22 - "NavigationMenu Component"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 23 - "Select Component"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 24 - "Card Component"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 25 - "Toggle & ToggleGroup"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 26 - "Alert Component"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 27 - "InputOTP Component"
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 28 - "Menu Page & Weekend Menu"
Cohesion: 0.67
Nodes (4): Restaurante Lino, Weekend Menu Image (Restaurante Lino), Menu Route Page, Weekend Menu Concept

### Community 29 - "Cabrito Dish Image"
Cohesion: 0.50
Nodes (3): Cabrito (roasted young goat dish), Dish photography, Portuguese cuisine

### Community 30 - "Accordion Component"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 31 - "Badge Component"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 32 - "Tabs Component"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

### Community 33 - "Bacalhau Dish Image"
Cohesion: 0.67
Nodes (3): Bacalhau à Zé Pipo (Portuguese codfish dish), Dish: Bacalhau à Zé Pipo, DishesSection component

## Ambiguous Edges - Review These
- `dish-arroz-pica-chao.png` → `Arroz Pica Chao`  [AMBIGUOUS]
  src/assets/dish-arroz-pica-chao.png · relation: depicts
- `hero.png` → `Hero Image`  [AMBIGUOUS]
  src/assets/hero.png · relation: is_a

## Knowledge Gaps
- **337 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `css` (+332 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `dish-arroz-pica-chao.png` and `Arroz Pica Chao`?**
  _Edge tagged AMBIGUOUS (relation: depicts) - confidence is low._
- **What is the exact relationship between `hero.png` and `Hero Image`?**
  _Edge tagged AMBIGUOUS (relation: is_a) - confidence is low._
- **Why does `cn()` connect `Button, Calendar, Pagination` to `About, Contact, Container`, `UI Primitives: Input/Sheet`, `Carousel & React Core`, `Minor UI Components I`, `Command Component`, `Menubar Component`, `Form Component`, `ContextMenu Component`, `DropdownMenu Component`, `AlertDialog Component`, `Table Component`, `Breadcrumb Component`, `Drawer Component`, `NavigationMenu Component`, `Select Component`, `Card Component`, `Toggle & ToggleGroup`, `Alert Component`, `InputOTP Component`, `Accordion Component`, `Badge Component`, `Tabs Component`, `ScrollArea Component`?**
  _High betweenness centrality (0.442) - this node is a cross-community bridge._
- **Why does `dependencies` connect `App Dependencies` to `Carousel & React Core`, `Package Scripts & Config`, `@cloudflare/vite-plugin`, `clsx Dependency`, `cmdk Dependency`, `date-fns Dependency`, `i18next Dependency`, `input-otp Dependency`, `lucide-react Dependency`, `radix-accordion`, `radix-alert-dialog`, `radix-aspect-ratio`, `radix-checkbox`, `radix-collapsible`, `radix-context-menu`, `radix-dialog`, `radix-dropdown-menu`, `radix-hover-card`, `radix-label`, `radix-menubar`, `radix-navigation-menu`, `radix-popover`, `radix-progress`, `radix-radio-group`, `radix-scroll-area`, `radix-select`, `radix-separator`, `radix-slider`, `radix-slot`, `radix-switch`, `radix-tabs`, `radix-toggle`, `radix-toggle-group`, `radix-tooltip`, `react-day-picker`, `react-i18next`, `react-resizable-panels`, `recharts Dependency`, `sonner Dependency`, `tailwind-merge`, `tailwindcss`, `@tailwindcss/vite`, `@tanstack/react-query`, `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `tw-animate-css`, `vaul Dependency`, `vite-tsconfig-paths`, `zod Dependency`?**
  _High betweenness centrality (0.364) - this node is a cross-community bridge._
- **Why does `react` connect `Carousel & React Core` to `UI Primitives: Input/Sheet`, `App Dependencies`, `Button, Calendar, Pagination`?**
  _High betweenness centrality (0.311) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _337 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `About, Contact, Container` be split into smaller, more focused modules?**
  _Cohesion score 0.08735150244584207 - nodes in this community are weakly interconnected._