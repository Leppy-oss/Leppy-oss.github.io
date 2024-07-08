export default {
    /** Ratio of the canvas dimensions to the width of the window */
    HWND_WIDTH: 0.5,
    /** The amount of canvas units (relative to px) of the canvas */
    CANVAS_DIM: 600,
    /** Radius of the default junction visualization in canvas units */
    JUNCTION_RADIUS_N: 15,
    /** Radius of the selected/hovered junction visualization canvas units */
    JUNCTION_RADIUS_E: 22.5,
    /** Radius of the junction when beaconed or owned */
    JUNCTION_RADIUS_O: 20,
    /** Very small number */
    EPSILON: 1E-10,
    /** Color of the junction when not selected OR hovered */
    JUNCTION_COLOR_N: 'rgba(0, 0, 0, 0.46)',
    /** Color of the junction when hovered */
    JUNCTION_COLOR_H: 'rgba(231, 209, 25, 0.42)',
    /** Color of the junction when selected */
    JUNCTION_COLOR_S: 'rgba(76, 232, 105, 0.49)',
    /** Color of the junction when owned by the red alliance */
    JUNCTION_COLOR_R: 'rgba(231, 25, 25, 0.73)',
    /** Color of the junction when owned by the blue alliance */
    JUNCTION_COLOR_B: 'rgba(24, 103, 233, 0.73)',
    /** How quickly the junction color becomes more opaque based on the number of cones */
    K_JUNCTION_COLOR: 0.15,
    /** The "base" opacity for the junction color */
    B_JUNCTION_COLOR: 0.2,
    /** Max num chars to truncate the notes in matches-list */
    MN_C_NOTES: 125
}