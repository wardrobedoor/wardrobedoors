import React from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Flex, Heading } from "@chakra-ui/layout";
import {
  useMediaQuery,
  IconButton,
  useColorMode,
  Spacer,
  Image,
} from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Flex w="100%" justify="center" align="center">
      <Heading ml={isNotSmallerScreen ? "8" : "3"} size="md">
        <Link href="/">
          <Image src="/logo.png" alt="logo" boxSize="80px" objectFit="cover" />
        </Link>
      </Heading>
      <Spacer></Spacer>
      <Link id="icons" href="https://www.linkedin.com/in/wendyywng/" isExternal>
        <IconButton
          ml={2}
          colorScheme="pink"
          icon={<FaLinkedin />}
          isRound="true"
        ></IconButton>
      </Link>
      <Link id="icons" href="https://github.com/wendyyng" isExternal>
        <IconButton
          ml={2}
          colorScheme="pink"
          icon={<FaGithub />}
          isRound="true"
        ></IconButton>
      </Link>
      <IconButton
        mr={isNotSmallerScreen ? "2" : "3"}
        ml={2}
        colorScheme="pink"
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}

export default Navbar;
