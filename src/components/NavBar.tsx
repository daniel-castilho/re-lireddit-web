import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<Flex bg="tomato" p={4}>
			<Box ml={"auto"}>
				<NextLink href="/login">
					<Link mr={2} ml={"auto"}>
						login
					</Link>
				</NextLink>
				<NextLink href="/register">
					<Link>register</Link>
				</NextLink>
			</Box>
		</Flex>
	);
};
