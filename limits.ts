// Token buckets for per-key rate limits (one key per artifact/endpoint or app/method).

export interface Limit {
	capacity: number;
	perSecond: number;
}

export class Buckets {
	#buckets = new Map<string, { tokens: number; at: number }>();
	#now: () => number;

	constructor(now: () => number = Date.now) {
		this.#now = now;
	}

	/** Takes one unit from the bucket; false when the allowance is spent. */
	take(key: string, limit: Limit): boolean {
		const now = this.#now();
		const bucket = this.#buckets.get(key) ?? { tokens: limit.capacity, at: now };
		bucket.tokens = Math.min(limit.capacity, bucket.tokens + ((now - bucket.at) / 1000) * limit.perSecond);
		bucket.at = now;
		const allowed = bucket.tokens >= 1;
		if (allowed) bucket.tokens -= 1;
		this.#buckets.set(key, bucket);
		return allowed;
	}
}
