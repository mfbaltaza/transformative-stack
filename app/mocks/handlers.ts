import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("https://api.transformative.com/user", () => {
		return HttpResponse.json({
			firstName: "John",
			lastName: "Wick",
		});
	}),
];
