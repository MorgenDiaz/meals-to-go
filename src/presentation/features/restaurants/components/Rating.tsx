import React from "react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { Theme } from "../../../../application/types";
import star from "../../../../../assets/star";

type RatingProps = {
  rating: number;
};

export default function Rating({ rating }: RatingProps) {
  const theme = useContext(ThemeContext);
  const styles = useMemo(() => createStyles(theme), [theme]);

  const stars: React.JSX.Element[] = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<SvgXml xml={star} style={styles.star} />);
  }

  return <View style={styles.container}>{stars}</View>;
}

function createStyles(theme: Theme) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    star: {
      width: theme.sizes[2],
      height: theme.sizes[2],
      marginLeft: theme.space[3],
    },
  });

  return styles;
}
