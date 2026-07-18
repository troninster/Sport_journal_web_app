/** Estimates 1RM with Epley, which is most reliable for low-to-moderate rep ranges. */
export function estimateOneRepMax(weight: number, reps: number): number {
    if (weight <= 0 || reps <= 0) return 0;
    if (reps === 1) return weight;

    return weight * (1 + reps / 30);
}
