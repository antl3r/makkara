import { Context } from "@rbxts/gamejoy";
import { Action } from "@rbxts/gamejoy/out/Actions";
import { makeHello } from "shared/module";

print(makeHello("main.client.ts"));

const MainContext = new Context({
	Process: false,
	RunSynchronously: false,
});

const TestAction = new Action("F");

MainContext.Bind(["F"], () => {
	print("Keep Yourself Safe");
});
