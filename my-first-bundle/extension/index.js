module.exports = (nodecg) => {
	nodecg.Replicant("currentMovieReplicant", {
		defaultValue: "Current Movie",
	});

	nodecg.Replicant("nextMovieReplicant", {
		defaultValue: "Next Movie",
	});
};

