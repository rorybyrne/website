---
title: "Introduction: Leaky Integrate-and-Fire Neuron"
slug: 'lif-intro'
description: "Mathematical model of the activity of a neuron based on the laws of electricity"
pubDate: "Dec 15 2020"
tags: ["neuroscience"]
---


## Model

The LIF neuron is a mathematical model of a neuron. It describes the neuron's membrane potential over time in the presence of injected current. The model uses the laws of electricity to construct two equations: one to describe how the membrane potential changes in response to input current, and another to describe the firing of a "spike" when the membrane potential reaches the firing threshold.

In electrical terms, this model describes an RC circuit with a resistor and a capacitor. The membrane potential is represented by the voltage as measured across the circuit.

Let's break down the name of the model to understand what it means in terms biologically, electrically, and computationally.

### Leaky
* Biologically: The cell membrane is not a perfect insulator so charged ions can pass through.
* Electrically: The resistor of the circuit corresponds to the cell membrane. If the resistance was infinitely large then the neuron would not leak.
* Computationally: The membrane potential of the neuron decays over time.

### Integrate
* Biologically: Ion channels in the neuron open in response to incoming spikes, meaning the influx of ions is roughly proportional to the number of incoming spikes.
* Electrically: The capacitor of the circuit builds up charge over time.
* Computationally: The neuron integrates/sums the incoming signal over time.

### Fire
* Biologically: When the membrane potential reaches a certain threshold (mV), the neuron spikes. This causes a sharp influx of positive ions which travels down the axon of the neuron via the rapid opening and closing of ion channels in the axon.
* Electrically: The firing of the neuron isn't modeled in the RC circuit.
* Computationally: When the integrated post-synaptic current reaches a threshold, it is reset back to the resting potential.

Below are the two equations which describe the dynamics of the neuron.

## Firing a spike

Immediately after reaching the "firing threshold", the neuron is reset back to $u_{rest}$. This is modeled as:

$$
    \lim_{\delta\to0} u(t^f + \delta) = u_{reset}
$$

Here, $t^f$ is the time that the neuron spikes, and $t^f + \delta$ is an infinitesimally small time-step after that time, due to the limit of $\delta$ approaching 0. Finally, of course, $u_{reset}$ is the value that the membrane potential is reset to.

## Modeling membrane potential

The change in membrane potential over time is modeled as a linear differential equation.

$$
    \tau_m \frac{du}{dt} = -[u_t-u_{rest}]+RI(t)
$$

In the next post, I'll derive this equation using the laws of electricity.
