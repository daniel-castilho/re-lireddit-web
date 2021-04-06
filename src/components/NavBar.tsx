import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql"

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	const [{ data, fetching }] = useMeQuery()
	let body = null

	// Data is loading
	if (fetching) {

	}
	// User is not logged in
	else if (!data?.me) {
		body = (
			<>
			<NextLink href="/login">
			<Link mr={2} ml={"auto"}>
			login
			</Link>
			</NextLink>
			<NextLink href="/register">
			<Link>register</Link>
			</NextLink>
			</>
		)
	}
	// User is logged in
	else {
		body = (
			<Box>{ data.me.username }</Box>
		)
	}
	return (
		<Flex bg="tomato" p={4}>
			<Box ml={"auto"}>
				{ body }
			</Box>
		</Flex>
	);
};
