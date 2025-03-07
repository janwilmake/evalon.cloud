export default {
	async fetch(req: Request, env: { evalon: DispatchNamespace }) {
		const worker = env.evalon.get('customer-worker-1');
		return worker.fetch(req);
	},
};
