// Game
pub const WORLD_WIDTH_IN_CELLS: usize = 12;
pub const WORLD_HEIGHT_IN_CELLS: usize = 8;
pub const TOTAL_CELLS: usize = WORLD_WIDTH_IN_CELLS * WORLD_HEIGHT_IN_CELLS;

pub const CELL_SIZE: f64 = 64f64;
pub const ASSET_SIZE: f64 = 16f64;

// Keyboard
pub const ARROW_UP: &str = "ArrowUp";
pub const ARROW_DOWN: &str = "ArrowDown";
pub const ARROW_LEFT: &str = "ArrowLeft";
pub const ARROW_RIGHT: &str = "ArrowRight";

// Player
pub const PLAYER_BASE_X_OFFSET: f64 = 0f64;
pub const PLAYER_BASE_Y_OFFSET: f64 = 0f64;
pub const PLAYER_WIDTH: f64 = 16f64;
pub const PLAYER_HEIGHT: f64 = 32f64;
pub const PLAYER_MOVE_TIME: f64 = 1000f64;
pub const PLAYER_ANIMATION_TIME: f64 = 250f64;

// Terrains
pub const GRASS_LAND_X_OFFSET: f64 = 7f64;
pub const GRASS_LAND_Y_OFFSET: f64 = 9f64;
pub const GRASS_LAND_SIZE: f64 = 32f64;

pub const WOODEN_PATH_X_OFFSET: f64 = 13f64;
pub const WOODEN_PATH_Y_OFFSET: f64 = 15f64;
pub const WOODEN_PATH_SIZE: f64 = 32f64;

// Objects
pub const TREE_X_OFFSET: f64 = 16f64;
pub const TREE_Y_OFFSET: f64 = 12f64;
pub const TREE_SIZE: f64 = 32f64;