// Interface for NamedAPIResource
export interface PokemonListResponse{
    count: number;
    next: string;
    previous: any;
    result: Pokemon[];
}

export interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  // Interface for PokemonAbility
  export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
  }
  
  // Interface for VersionGameIndex
  export interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
  }
  
  // Interface for PokemonHeldItem
  export interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
  }
  
  // Interface for PokemonHeldItemVersion
  export interface PokemonHeldItemVersion {
    version: NamedAPIResource;
    rarity: number;
  }
  
  // Interface for PokemonMove
  export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
  }
  
  // Interface for PokemonMoveVersion
  export interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
  }
  
  // Interface for PokemonTypePast
  export interface PokemonTypePast {
    generation: NamedAPIResource;
    types: PokemonType[];
  }
  
  // Interface for PokemonSprites
  export interface PokemonSprites {
    front_default: string | null;
    front_shiny: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_female: string | null;
    back_shiny_female: string | null;
  }
  
  // Interface for PokemonCries
  export interface PokemonCries {
    front_default: string | null;
  }
  
  // Interface for PokemonStat
  export interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
  }
  
  // Interface for PokemonType
  export interface PokemonType {
    slot: number;
    type: NamedAPIResource;
  }
  
  // Interface for PokemonSpecies
  export interface PokemonSpecies {
    name: string;
    url: string;
  }
  
  // Main interface for Pokemon
  export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    cries: PokemonCries;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
  }
  